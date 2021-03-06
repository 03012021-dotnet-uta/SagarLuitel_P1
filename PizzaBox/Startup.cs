using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using BusinessLogic;
using Repository;


namespace PizzaBox
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddScoped<PizzaBoxDbContext>();
            services.AddScoped<UserMethods>();// THIS REGISTERS THE CLASS WITH THE DEPENDENCY INJECTION SYSTEM.
            services.AddScoped<PizzaBoxRepo>();// THIS REGISTERS THE CLASS WITH THE DEPENDENCY INJECTION SYSTEM.
            services.AddScoped<userRepo>();
            services.AddScoped<PizzaMethods>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PizzaBox", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PizzaBox v1"));
            }

            // allows to use the static JS pages
            app.UseStatusCodePages();

            app.UseHttpsRedirection();

            // use this to  redirect to the index HTML for any random path
            app.UseRewriter(new RewriteOptions()
                .AddRedirect("^$", "index.html"));

            app.UseDefaultFiles();

            // use the .js static files (find out what 'static' means)
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
