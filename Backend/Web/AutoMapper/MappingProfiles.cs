using AutoMapper;
using Domain.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;

namespace Web.AutoMapper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Substation, SubstationRequest>().ReverseMap();
            CreateMap<Substation, SubstationResponse>().ReverseMap();
        }
    }
}
