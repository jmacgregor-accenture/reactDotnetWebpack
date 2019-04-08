using Microsoft.AspNetCore.Mvc;

namespace ReactWebpackTrial.Controllers.Home
{
    public class HomeController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}