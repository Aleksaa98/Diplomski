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
    public class FuseController : ControllerBase
    {
        public readonly IFuseService _service;

        public FuseController(IFuseService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var fuseList = await _service.GetAllFuses();
            return Ok(fuseList);
        }

        [HttpGet("{fuseId}")]
        public async Task<IActionResult> Get(int fuseId)
        {
            var fuse = await _service.GetFuseById(fuseId);
            if (fuse != null)
                return Ok(fuse);
            else
                return BadRequest("Fuse details not found");
        }

        [HttpPost]
        public async Task<IActionResult> Add(FuseRequest fuse)
        {
            var fuseCreated = await _service.CreateNewFuse(fuse);
            if (fuseCreated)
                return Ok("Fuse created successfull");
            else
                return BadRequest("Unable to create Fuse");
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, FuseRequest fuse)
        {
            var f = await _service.UpdateFuse(id, fuse);
            if (f)
                return Ok("Fuse updated successfull");
            else
                return BadRequest("Unable to update Fuse");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var fuse = await _service.Delete(id);
            if (fuse)
                return Ok("Fuse deleted successfull");
            else
                return BadRequest("Unable to delete Fuse");
        }
    }
}
