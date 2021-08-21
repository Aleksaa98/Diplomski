using AutoMapper;
using Domain.Core;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Exceptions;
using Web.Models;
using Web.Services.Interfaces;

namespace Web.Services
{
    public class SubstationService : ISubstationService
    {
        public IUnitOfWork _unitOfWork;
        public readonly IMapper _mapper;

        public SubstationService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<bool> CreateNewSubstation(SubstationRequest substation)
        {
            if (Validation(substation))
            {
                if ( _unitOfWork.Substations.GetByMridAndName(substation.Mrid, substation.Name)) 
                {
                    throw new AlreadyExistsException("Substation", substation.Mrid, substation.Name);
                }
                else
                {
                    var newSubstation = _mapper.Map<Substation>(substation);
                    await _unitOfWork.Substations.Add(newSubstation);
                    var result = _unitOfWork.Complete();
                    if (result > 0)
                        return true;
                    else 
                    {
                        //return false;
                        throw new Exception();
                    }
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
                var sub = await _unitOfWork.Substations.Get(id);
                if (sub != null)
                {
                    _unitOfWork.Substations.Delete(sub);
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
                    throw new NotFoundException("Substation", id);
                }
            }

            return false;
        }

        public async Task<IEnumerable<SubstationResponse>> GetAllSubstations()
        {
            var list=await _unitOfWork.Substations.GetAll();
            var newList = _mapper.Map<List<SubstationResponse>>(list);
            return newList;
        }

        public async Task<SubstationResponse> GetSubstationById(int id)
        {
            if (id > 0)
            {
                var substation = await _unitOfWork.Substations.Get(id);
                if (substation != null)
                {
                    var newSubstation= _mapper.Map<SubstationResponse>(substation);
                    return newSubstation;
                }
                else
                {
                    throw new NotFoundException("Substation", id);
                }

            }
            
            return null;
        }

        public async Task<bool> UpdateSubstation(int id, SubstationRequest substation)
        {
            if (id > 0 && Validation(substation))
            {
                var sub = await _unitOfWork.Substations.Get(id);
                if (sub.Id != id)
                {
                    throw new BadRequestException(id, sub.Id);
                }
                if (sub != null)
                {
                    var newSubstation = _mapper.Map<Substation>(substation);
                    _unitOfWork.Substations.Update(sub, newSubstation);
                    var result = _unitOfWork.Complete();
                    if (result > 0)
                        return true;
                    else
                        return false;
                }
                else
                {
                    throw new NotFoundException("Substation", id);
                }
            }
            else
            {
                throw new ValidationException();
            }
        }
        private bool Validation(SubstationRequest substationDTO)
        {
            if (substationDTO == null) return false;
            if (substationDTO.Id < 0) return false;
            if (string.IsNullOrEmpty(substationDTO.Mrid) || string.IsNullOrEmpty(substationDTO.Name) || string.IsNullOrEmpty(substationDTO.Description))
                return false;

            return true;
        }
    }
}
