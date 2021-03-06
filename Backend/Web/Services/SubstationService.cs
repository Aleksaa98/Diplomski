using AutoMapper;
using Domain.Core;
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
                if (_unitOfWork.Substations.GetByMridAndName(substation.Mrid, substation.Name))
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
            var list = await _unitOfWork.Substations.GetAllSubstation();
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
                    var newSubstation = _mapper.Map<SubstationResponse>(substation);
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
        private bool Validation(SubstationRequest substation)
        {
            if (substation == null) return false;
            if (substation.Id < 0) return false;
            if (string.IsNullOrEmpty(substation.Mrid) || string.IsNullOrEmpty(substation.Name) || string.IsNullOrEmpty(substation.Description))
                return false;

            return true;
        }

        public async Task<bool> CreateNewSubstationAndSwitches(SubstationRequest substation)
        {
            if (Validation(substation))
            {
                if (_unitOfWork.Substations.GetByMridAndName(substation.Mrid, substation.Name))
                {
                    throw new AlreadyExistsException("Substation", substation.Mrid, substation.Name);
                }
                else
                {
                    var newSubstation = _mapper.Map<Substation>(substation);

                    List<Disconnector> disconnectors = (List<Disconnector>)newSubstation.Disconnector;
                    List<Breaker> breakers = (List<Breaker>)newSubstation.Breakers;
                    List<Fuse> fuses = (List<Fuse>)newSubstation.Fuses;
                    List<LoadBreakSwitch> loadBreakSwitches = (List<LoadBreakSwitch>)newSubstation.LoadBreakSwitches;
                    Substation sub = new Substation()
                    {
                        Id = newSubstation.Id,
                        Mrid = newSubstation.Mrid,
                        Name = newSubstation.Name,
                        Description = newSubstation.Description,
                        State = newSubstation.State
                    };

                    await _unitOfWork.Substations.Add(sub);
                    await _unitOfWork.Disconnector.AddList(disconnectors);
                    await _unitOfWork.Breaker.AddList(breakers);
                    await _unitOfWork.Fuse.AddList(fuses);
                    await _unitOfWork.LoadBreakSwitch.AddList(loadBreakSwitches);

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
    }
}
