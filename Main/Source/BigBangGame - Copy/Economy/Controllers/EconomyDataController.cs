using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Economy.Helper;

namespace Economy.Controllers
{
    public class EconomyDataController : ApiController
    {
        [HttpPost]
        [HttpGet]
        public Models.Action GetAction([FromBody]int actionId)
        {
            return Database.GetOrDefault<Models.Action>(actionId);
        }

        [HttpPost]
        [HttpGet]
        public void SaveAction(Models.Action action)
        {
            Database.Create<Models.Action>(action);
        }
    }
}
