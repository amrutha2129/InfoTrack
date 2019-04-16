using System.Threading.Tasks;
using InfoTrack.Models;
using InfoTrack.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InfoTrack.Controllers
{
    [Route("api/[controller]")]
    public class TitleSearchController : Controller
    {
        private readonly IScrapeOperations _scrapeOperations;
        public TitleSearchController(IScrapeOperations scrapeOperations)
        {
            _scrapeOperations = scrapeOperations;
        }
        [HttpGet("[action]")]
        public async Task<UrlRank> fetchTitleSearchResults(string searchWord, string searchUrl)
        {
            
            return await _scrapeOperations.parseResultPageAsync(searchWord, searchUrl);
        }
       
    }
}
