using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Request;
using Web.Services.Interfaces;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DisconnectorController : ControllerBase
    {
        public readonly IDisconnectorService _service;

        public DisconnectorController(IDisconnectorService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var disconnectorList = await _service.GetAllDisconnectors();
            return Ok(disconnectorList);
        }

        [HttpGet("{disconnectorId}")]
        public async Task<IActionResult> Get(int disconnectorId)
        {
            var disconnector = await _service.GetDisconnectorById(disconnectorId);
            if (disconnector != null)
                return Ok(disconnector);
            else
                return BadRequest("Disconnector details not found");
        }

        [HttpPost]
        public async Task<IActionResult> Add(DisconnectorRequest disconnector)
        {
            var disconnectorCreated = await _service.CreateNewDisconnector(disconnector);
            if (disconnectorCreated)
                return Ok("Disconnector created successfull");
            else
                return BadRequest("Unable to create Disconnector");
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, DisconnectorRequest disconnector)
        {
            var d = await _service.UpdateDisconnector(id, disconnector);
            if (d)
                return Ok("Disconnector updated successfull");
            else
                return BadRequest("Unable to update Disconnector");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var disconnector = await _service.Delete(id);
            if (disconnector)
                return Ok("Disconnector deleted successfull");
            else
                return BadRequest("Unable to delete Disconnector");
        }
    }
}
