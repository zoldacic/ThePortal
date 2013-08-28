using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Web;

namespace Economy.Models
{
    public class Action
    {
        public Action() { 
            Title = "Titel";
            Labels = new Collection<string>() { "abcd", "efg" };
        }

        public int Id { get; set; }
        public DateTime ExecuteDate { get; set; }
        public ICollection<string> Labels { get; set; }
        public string Value { get; set; }
        public string Unit { get; set; }
        public string Title { get; set; }
        public string Comment { get; set; }
        public string Status { get; set; }
    }
}