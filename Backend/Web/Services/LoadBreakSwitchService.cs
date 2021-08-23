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
    public class LoadBreakSwitchService : ILoadBreakSwitchService
    {
        public IUnitOfWork _unitOfWork;
        public readonly IMapper _mapper;

        public LoadBreakSwitchService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<bool> CreateNewLoadBreakSwitch(LoadBreakSwitchRequest loadBreakSwitchRequest)
        {
            if (Validation(loadBreakSwitchRequest))
            {
                if (_unitOfWork.Substations.GetByMridAndName(loadBreakSwitchRequest.Mrid, loadBreakSwitchRequest.Name))
                {
                    throw new AlreadyExistsException("LoadBreakSwitch", loadBreakSwitchRequest.Mrid, loadBreakSwitchRequest.Name);
                }
                else if (!_unitOfWork.Substations.CheckIfEntityExists(loadBreakSwitchRequest.SubstationId))
                {
                    throw new NotFoundException("Substation", loadBreakSwitchRequest.SubstationId);
                }
                else
                {
                    var newLoadBreakSwitch = _mapper.Map<LoadBreakSwitch>(loadBreakSwitchRequest);
                    await _unitOfWork.LoadBreakSwitch.Add(newLoadBreakSwitch);
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

        public async Task<IEnumerable<LoadBreakSwitchResponse>> GetAllLoadBreakSwitches()
        {
            var list = await _unitOfWork.LoadBreakSwitch.GetAll();
            var newList = _mapper.Map<List<LoadBreakSwitchResponse>>(list);
            return newList;
        }

        public async Task<LoadBreakSwitchResponse> GetLoadBreakSwitchById(int id)
        {
            if (id > 0)
            {
                var loadBreakSwitch = await _unitOfWork.LoadBreakSwitch.Get(id);
                if (loadBreakSwitch != null)
                {
                    var newLoadBreakSwitch = _mapper.Map<LoadBreakSwitchResponse>(loadBreakSwitch);
                    return newLoadBreakSwitch;
                }
                else
                {
                    throw new NotFoundException("LoadBreakSwitch", id);
                }

            }

            return null;
        }

        public async Task<bool> UpdateLoadBreakSwitch(int id, LoadBreakSwitchRequest loadBreakSwitchRequest)
        {
            if (id > 0 && Validation(loadBreakSwitchRequest))
            {
                var l = await _unitOfWork.LoadBreakSwitch.Get(id);
                if (l.Id != id)
                {
                    throw new BadRequestException(id, l.Id);
                }
                if (l != null)
                {
                    var newloadBreakSwitch = _mapper.Map<LoadBreakSwitch>(loadBreakSwitchRequest);
                    _unitOfWork.LoadBreakSwitch.Update(l, newloadBreakSwitch);
                    var result = _unitOfWork.Complete();
                    if (result > 0)
                        return true;
                    else
                        return false;
                }
                else if (!_unitOfWork.Substations.CheckIfEntityExists(loadBreakSwitchRequest.SubstationId))
                {
                    throw new NotFoundException("Substation", loadBreakSwitchRequest.SubstationId);
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

        public async Task<bool> Delete(int id)
        {
            if (id > 0)
            {
                var l = await _unitOfWork.LoadBreakSwitch.Get(id);
                if (l != null)
                {
                    _unitOfWork.LoadBreakSwitch.Delete(l);
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
        private bool Validation(LoadBreakSwitchRequest loadBreakSwitch)
        {
            if (loadBreakSwitch == null) return false;
            if (loadBreakSwitch.Id < 0) return false;
            if (string.IsNullOrEmpty(loadBreakSwitch.Mrid) || string.IsNullOrEmpty(loadBreakSwitch.Name) || string.IsNullOrEmpty(loadBreakSwitch.Description))
                return false;
            if (loadBreakSwitch.CostPerUnit < 0 || loadBreakSwitch.FailureRate < 0 || loadBreakSwitch.Phases < 0 || loadBreakSwitch.RatedVoltage < 0 || loadBreakSwitch.SwitchOnCount < 0 || loadBreakSwitch.RatedCurrent < 0 || loadBreakSwitch.SubstationId < 0)
                return false;

            return true;
        }
    }
}
