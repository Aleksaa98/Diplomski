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
    public class FuseService:IFuseService
    {
        public IUnitOfWork _unitOfWork;
        public readonly IMapper _mapper;

        public FuseService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<bool> CreateNewFuse(FuseRequest fuse)
        {
            if (Validation(fuse))
            {
                if (_unitOfWork.Fuse.GetByMridAndName(fuse.Mrid, fuse.Name))
                {
                    throw new AlreadyExistsException("Fuse", fuse.Mrid, fuse.Name);
                }
                else
                {
                    var newFuse = _mapper.Map<Fuse>(fuse);
                    await _unitOfWork.Fuse.Add(newFuse);
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

        public async Task<IEnumerable<FuseResponse>> GetAllFuses()
        {
            var list = await _unitOfWork.Fuse.GetAll();
            var newList = _mapper.Map<List<FuseResponse>>(list);
            return newList;
        }

        public async Task<FuseResponse> GetFuseById(int id)
        {
            if (id > 0)
            {
                var fuse = await _unitOfWork.Fuse.Get(id);
                if (fuse != null)
                {
                    var newFuse = _mapper.Map<FuseResponse>(fuse);
                    return newFuse;
                }
                else
                {
                    throw new NotFoundException("Fuse", id);
                }

            }

            return null;
        }

        public async Task<bool> UpdateFuse(int id, FuseRequest fuse)
        {
            if (id > 0 && Validation(fuse))
            {
                var l = await _unitOfWork.Fuse.Get(id);
                if (l.Id != id)
                {
                    throw new BadRequestException(id, l.Id);
                }
                if (l != null)
                {
                    var newFuse = _mapper.Map<Fuse>(fuse);
                    _unitOfWork.Fuse.Update(l, newFuse);
                    var result = _unitOfWork.Complete();
                    if (result > 0)
                        return true;
                    else
                        return false;
                }
                else
                {
                    throw new NotFoundException("Fuse", id);
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
                var f = await _unitOfWork.Fuse.Get(id);
                if (f != null)
                {
                    _unitOfWork.Fuse.Delete(f);
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
                    throw new NotFoundException("Fuse", id);
                }
            }

            return false;
        }
        private bool Validation(FuseRequest fuse)
        {
            if (fuse == null) return false;
            if (fuse.Id < 0) return false;
            if (string.IsNullOrEmpty(fuse.Mrid) || string.IsNullOrEmpty(fuse.Name) || string.IsNullOrEmpty(fuse.Description))
                return false;
            if (fuse.CostPerUnit < 0 || fuse.FailureRate < 0 || fuse.Phases < 0 || fuse.RatedVoltage < 0 || fuse.SwitchOnCount < 0 || fuse.RatingCurrent < 0 || fuse.MaxFaultCurrent<0)
                return false;

            return true;
        }
    }
}
