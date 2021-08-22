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
    public class BreakerController : ControllerBase
    {
        public readonly IBreakerService _service;

        public BreakerController(IBreakerService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var breakerList = await _service.GetAllBreakers();
            return Ok(breakerList);
        }

        [HttpGet("{breakerId}")]
        public async Task<IActionResult> Get(int breakerId)
        {
            var breaker = await _service.GetBreakerById(breakerId);
            if (breaker != null)
                return Ok(breaker);
            else
                return BadRequest("Breaker details not found");
        }

        [HttpPost]
        public async Task<IActionResult> Add(BreakerRequest breaker)
        {
            var breakerCreated = await _service.CreateNewBreaker(breaker);
            if (breakerCreated)
                return Ok("Breaker created successfull");
            else
                return BadRequest("Unable to create Breaker");
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, BreakerRequest breaker)
        {
            var b = await _service.UpdateBreaker(id, breaker);
            if (b)
                return Ok("Breaker updated successfull");
            else
                return BadRequest("Unable to update Breaker");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var b = await _service.Delete(id);
            if (b)
                return Ok("Breaker deleted successfull");
            else
                return BadRequest("Unable to delete Breaker");
        }
    }
}
