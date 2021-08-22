using AutoMapper;
using Domain.Core;
using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Request;
using Web.Models.Response;

namespace Web.AutoMapper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Substation, SubstationRequest>().ReverseMap();
            CreateMap<Substation, SubstationResponse>().ReverseMap();

            CreateMap<Disconnector, DisconnectorRequest>().ReverseMap();
            CreateMap<Disconnector, DisconnectorResponse>().ReverseMap();

            CreateMap<Fuse, FuseRequest>().ReverseMap();
            CreateMap<Fuse, FuseResponse>().ReverseMap();

            CreateMap<Breaker, BreakerRequest>().ReverseMap();
            CreateMap<Breaker, BreakerResponse>().ReverseMap();

            CreateMap<LoadBreakSwitch, LoadBreakSwitchRequest>().ReverseMap();
            CreateMap<LoadBreakSwitch, LoadBreakSwitchResponse>().ReverseMap();

        }
    }
}
