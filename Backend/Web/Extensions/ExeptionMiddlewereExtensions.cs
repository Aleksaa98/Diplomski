using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Exceptions;
using Web.Loger;

namespace Web.Extensions
{
    public static class ExeptionMiddlewereExtensions
    {
        public static void ConfigureExeptionHandler(this IApplicationBuilder app)
        {
            app.UseExceptionHandler(appError => {
                appError.Run(async context => {
                    context.Response.ContentType = "application/json";


                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();

                    if (contextFeature != null)
                    {
                        if (contextFeature.Error is NotFoundException)
                        {
                            NotFoundException exeption = (NotFoundException)contextFeature.Error;
                            LoggerService.Instance.Error($"Something went wrong: {exeption.Message}, {exeption.StatusCode}");
                            context.Response.StatusCode = exeption.StatusCode;
                            await context.Response.WriteAsync(new ErrorDetails
                            {
                                StatusCode = exeption.StatusCode,
                                Message = exeption.Message
                            }.ToString());

                        }
                        else if (contextFeature.Error is BadRequestException)
                        {
                            BadRequestException exeption = (BadRequestException)contextFeature.Error;
                            context.Response.StatusCode = exeption.StatusCode;
                            LoggerService.Instance.Error($"Something went wrong: {exeption.Message}, {exeption.StatusCode}");
                            await context.Response.WriteAsync(new ErrorDetails
                            {
                                StatusCode = exeption.StatusCode,
                                Message = exeption.Message
                            }.ToString());
                        }
                        else if (contextFeature.Error is AlreadyExistsException)
                        {
                            AlreadyExistsException exeption = (AlreadyExistsException)contextFeature.Error;
                            context.Response.StatusCode = exeption.StatusCode;
                            LoggerService.Instance.Error($"Something went wrong: {exeption.Message}, {exeption.StatusCode}");
                            await context.Response.WriteAsync(new ErrorDetails
                            {
                                StatusCode = exeption.StatusCode,
                                Message = exeption.Message
                            }.ToString());
                        }
                        else if (contextFeature.Error is ValidationException)
                        {
                            ValidationException exeption = (ValidationException)contextFeature.Error;
                            context.Response.StatusCode = exeption.StatusCode;
                            LoggerService.Instance.Error($"Something went wrong: {exeption.Message}");
                            await context.Response.WriteAsync(new ErrorDetails
                            {
                                StatusCode = exeption.StatusCode,
                                Message = exeption.Message
                            }.ToString());
                        }
                        else
                        {
                            LoggerService.Instance.Error($"Something went wrong: {contextFeature.Error}");
                            await context.Response.WriteAsync(new ErrorDetails
                            {
                                StatusCode = context.Response.StatusCode,
                                Message = "Internal server error"
                            }.ToString());
                        }
                    }
                });
            });
        }
    }
}
