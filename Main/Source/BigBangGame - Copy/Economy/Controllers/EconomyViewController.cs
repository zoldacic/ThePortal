using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Economy.Controllers
{
    public class EconomyViewController : Controller
    {
        //
        // GET: /EconomyView/

        public ActionResult Index()
        {
            return PartialView();
        }

        public ActionResult Action()
        {
            return PartialView();
        }
    }
}
