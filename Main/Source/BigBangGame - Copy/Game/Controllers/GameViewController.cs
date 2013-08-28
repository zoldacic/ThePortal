using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Game.Controllers
{
    public class GameViewController : Controller
    {
        //
        // GET: /GameView/

        public ActionResult Index()
        {
            return View();
        }

    }
}
