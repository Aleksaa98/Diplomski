using Domain.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;
using Web.Services.Interfaces;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubstationController : ControllerBase
    {
        public readonly ISubstationService _service;

        public SubstationController(ISubstationService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var substationList = await _service.GetAllSubstations();
            return Ok(substationList);
        }

        [HttpGet("{substationId}")]
        public async Task<IActionResult> Get(int substationId)
        {
            var substation = await _service.GetSubstationById(substationId);
            if (substation != null)
                return Ok(substation);
            else
                return BadRequest("Substation details not found");
        }

        [HttpPost]
        public async Task<IActionResult> Add(SubstationRequest substation)
        {
            var substationCreated = await _service.CreateNewSubstation(substation);
            if (substationCreated)
                return Ok("Substation created successfull");
            else
                return BadRequest("Unable to create substation");
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, SubstationRequest substation)
        {
            var sub = await _service.UpdateSubstation(id, substation);
            if (sub)
                return Ok("Substation updated successfull");
            else
                return BadRequest("Unable to update substation");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var substation = await _service.Delete(id);
            if (substation)
                return Ok("Substation deleted successfull");
            else
                return BadRequest("Unable to delete substation");
        }
    }
}
