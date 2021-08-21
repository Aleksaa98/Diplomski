using Domain.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.DIExtensions
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IDisconnectorRepository, DisconnectorRepository>();
            services.AddScoped<IFuseRepository, FuseRepository>();
            services.AddScoped<IBreakerRepository, BreakerRepository>();
            services.AddScoped<ILoadBreakSwitchRepository, LoadBreakSwitchRepository>();
            services.AddScoped<ISubstationRepository, SubstationRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}
