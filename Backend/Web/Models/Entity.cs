using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models
{
    public abstract class Entity
    {
        public int Id { get; set; }
        public string Mrid { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
