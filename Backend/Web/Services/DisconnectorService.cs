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
    public class DisconnectorService: IDisconnectorService
    {
        public IUnitOfWork _unitOfWork;
        public readonly IMapper _mapper;

        public DisconnectorService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<bool> CreateNewDisconnector(DisconnectorRequest disconnector)
        {
            if (Validation(disconnector))
            {
                if (_unitOfWork.Disconnector.GetByMridAndName(disconnector.Mrid, disconnector.Name))
                {
                    throw new AlreadyExistsException("Disconnector", disconnector.Mrid, disconnector.Name);
                }
                else
                {
                    var newDisconnector = _mapper.Map<Disconnector>(disconnector);
                    await _unitOfWork.Disconnector.Add(newDisconnector);
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

        public async Task<IEnumerable<DisconnectorResponse>> GetAllDisconnectors()
        {
            var list = await _unitOfWork.Disconnector.GetAll();
            var newList = _mapper.Map<List<DisconnectorResponse>>(list);
            return newList;
        }

        public async Task<DisconnectorResponse> GetDisconnectorById(int id)
        {
            if (id > 0)
            {
                var disconnector = await _unitOfWork.Disconnector.Get(id);
                if (disconnector != null)
                {
                    var newDisconnector = _mapper.Map<DisconnectorResponse>(disconnector);
                    return newDisconnector;
                }
                else
                {
                    throw new NotFoundException("Disconnector", id);
                }

            }

            return null;
        }

        public async Task<bool> UpdateDisconnector(int id, DisconnectorRequest disconnector)
        {
            if (id > 0 && Validation(disconnector))
            {
                var d = await _unitOfWork.Disconnector.Get(id);
                if (d.Id != id)
                {
                    throw new BadRequestException(id, d.Id);
                }
                if (d != null)
                {
                    var newDisconnector = _mapper.Map<Disconnector>(disconnector);
                    _unitOfWork.Disconnector.Update(d, newDisconnector);
                    var result = _unitOfWork.Complete();
                    if (result > 0)
                        return true;
                    else
                        return false;
                }
                else
                {
                    throw new NotFoundException("Disconnector", id);
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
                var d = await _unitOfWork.Disconnector.Get(id);
                if (d != null)
                {
                    _unitOfWork.Disconnector.Delete(d);
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
                    throw new NotFoundException("Disconnector", id);
                }
            }

            return false;
        }
        private bool Validation(DisconnectorRequest disconnector)
        {
            if (disconnector == null) return false;
            if (disconnector.Id < 0) return false;
            if (string.IsNullOrEmpty(disconnector.Mrid) || string.IsNullOrEmpty(disconnector.Name) || string.IsNullOrEmpty(disconnector.Description))
                return false;
            if (disconnector.CostPerUnit < 0 || disconnector.FailureRate < 0 || disconnector.Phases < 0 || disconnector.RatedVoltage < 0 || disconnector.SwitchOnCount < 0 || disconnector.ReactiveBreakingCurrent < 0)
                return false;

            return true;
        }
    }
}
