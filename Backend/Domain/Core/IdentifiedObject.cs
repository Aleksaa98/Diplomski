using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Domain.Core
{
    public class IdentifiedObject
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Mrid { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public IdentifiedObject() { }
        public IdentifiedObject(int id)
        {
            this.Id = id;
        }
    }
}
