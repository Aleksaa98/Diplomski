using AutoMapper;
using Domain.Interfaces;
using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Exceptions;
using Web.Models.Request;
using Web.Models.Response;
using Web.Services.Interfaces;

namespace Web.Services
{
    public class BreakerService: IBreakerService
    {
        public IUnitOfWork _unitOfWork;
        public readonly IMapper _mapper;

        public BreakerService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<bool> CreateNewBreaker(BreakerRequest breaker)
        {
            if (Validation(breaker))
            {
                if (_unitOfWork.Breaker.GetByMridAndName(breaker.Mrid, breaker.Name))
                {
                    throw new AlreadyExistsException("Breaker", breaker.Mrid,breaker.Name);
                }
                else
                {
                    var newBreaker = _mapper.Map<Breaker>(breaker);
                    await _unitOfWork.Breaker.Add(newBreaker);
                    var result = _unitOfWork.Complete();
                    if (result > 0)
                        return true;
                    else
                    {
                        throw new Exception();
                    }
                }

            }
            else
            {
                throw new ValidationException();
            }
        }

        public async Task<IEnumerable<BreakerResponse>> GetAllBreakers()
        {
            var list = await _unitOfWork.Breaker.GetAll();
            var newList = _mapper.Map<List<BreakerResponse>>(list);
            return newList;
        }

        public async Task<BreakerResponse> GetBreakerById(int id)
        {
            if (id > 0)
            {
                var breaker = await _unitOfWork.Breaker.Get(id);
                if (breaker != null)
                {
                    var newBreaker = _mapper.Map<BreakerResponse>(breaker);
                    return newBreaker;
                }
                else
                {
                    throw new NotFoundException("Breaker", id);
                }

            }

            return null;
        }

        public async Task<bool> UpdateBreaker(int id, BreakerRequest breaker)
        {
            if (id > 0 && Validation(breaker))
            {
                var d = await _unitOfWork.Breaker.Get(id);
                if (d.Id != id)
                {
                    throw new BadRequestException(id, d.Id);
                }
                if (d != null)
                {
                    var newBreaker = _mapper.Map<Breaker>(breaker);
                    _unitOfWork.Breaker.Update(d, newBreaker);
                    var result = _unitOfWork.Complete();
                    if (result > 0)
                        return true;
                    else
                        return false;
                }
                else
                {
                    throw new NotFoundException("Breaker", id);
                }
            }
            else
            {
                throw new ValidationException();
            }
        }

        public async Task<bool> Delete(int id)
        {
            if (id > 0)
            {
                var b = await _unitOfWork.Breaker.Get(id);
                if (b != null)
                {
                    _unitOfWork.Breaker.Delete(b);
                    var result = _unitOfWork.Complete();
                    if (result > 0)
                        return true;
                    else
                    {
                        //return false;
                        throw new Exception();
                    }
                }
                else
                {
                    throw new NotFoundException("Breaker", id);
                }
            }

            return false;
        }
        private bool Validation(BreakerRequest breaker)
        {
            if (breaker == null) return false;
            if (breaker.Id < 0) return false;
            if (string.IsNullOrEmpty(breaker.Mrid) || string.IsNullOrEmpty(breaker.Name) || string.IsNullOrEmpty(breaker.Description))
                return false;
            if (breaker.CostPerUnit < 0 || breaker.FailureRate < 0 || breaker.Phases < 0 || breaker.RatedVoltage < 0 || breaker.SwitchOnCount < 0 || breaker.InTransitTime < 0 || breaker.RatedCurrent<0)
                return false;

            return true;
        }
    }
}
