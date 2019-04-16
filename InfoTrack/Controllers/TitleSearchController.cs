using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
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

        //public UrlRank parseResultPage(string resultPage, string searchUrl)
        //{
        //    Dictionary<int,string> urlRankMap = new Dictionary<int, string>();
        //    int i = 0, k;
        //    var startOfResults = findStartOfResults(resultPage);
        //    var resultSections = startOfResults.Split("<div class=\"g\">");
        //    for (k = 1; k < resultSections.Length; k++)
        //    {
        //        urlRankMap.Add(i++,getUrlFromSections(resultSections[k]));
        //    }
        //    return getRankList(urlRankMap, searchUrl);
        //}
        //private string findStartOfResults(string resultPage)
        //{
        //    string[] authorsList = resultPage.Split("ires");
        //    return authorsList[1];
        //}

        //private string getUrlFromSections(string section)
        //{
        //    int startOfUrl = section.IndexOf("http");
        //    if(section[startOfUrl+4] == 's')
        //    {
        //        return section.Substring(startOfUrl, (section.IndexOf("/", startOfUrl + 8)) - startOfUrl);
        //    }
        //    else
        //    {
        //        return section.Substring(startOfUrl, (section.IndexOf("/", startOfUrl + 7)) - startOfUrl);
        //    }
            
        //}

        //private UrlRank getRankList(Dictionary<int, string> urlRankMap, string searchUrl)
        //{
        //    UrlRank urlRank = new UrlRank();
        //    foreach (KeyValuePair<int, string> item in urlRankMap)
        //    {
        //        if (item.Value.Equals(searchUrl))
        //        {
        //            urlRank.RankList.Add(item.Key);
        //        }

        //    }
        //    return urlRank;
        //}

    }
}
