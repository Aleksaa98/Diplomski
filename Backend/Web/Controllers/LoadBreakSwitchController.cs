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
    public class LoadBreakSwitchController : ControllerBase
    {
        public readonly ILoadBreakSwitchService _service;

        public LoadBreakSwitchController(ILoadBreakSwitchService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var loadBreakSwitchList = await _service.GetAllLoadBreakSwitches();
            return Ok(loadBreakSwitchList);
        }

        [HttpGet("{loadBreakSwitchId}")]
        public async Task<IActionResult> Get(int loadBreakSwitchId)
        {
            var loadBreakSwitch = await _service.GetLoadBreakSwitchById(loadBreakSwitchId);
            if (loadBreakSwitch != null)
                return Ok(loadBreakSwitch);
            else
                return BadRequest("LoadBreakSwitch details not found");
        }

        [HttpPost]
        public async Task<IActionResult> Add(LoadBreakSwitchRequest loadBreakSwitch)
        {
            var loadBreakSwitchCreated = await _service.CreateNewLoadBreakSwitch(loadBreakSwitch);
            if (loadBreakSwitchCreated)
                return Ok("LoadBreakSwitch created successfull");
            else
                return BadRequest("Unable to create LoadBreakSwitch");
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, LoadBreakSwitchRequest loadBreakSwitch)
        {
            var l = await _service.UpdateLoadBreakSwitch(id, loadBreakSwitch);
            if (l)
                return Ok("LoadBreakSwitch updated successfull");
            else
                return BadRequest("Unable to update LoadBreakSwitch");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var l = await _service.Delete(id);
            if (l)
                return Ok("LoadBreakSwitch deleted successfull");
            else
                return BadRequest("Unable to delete LoadBreakSwitch");
        }
    }
}
