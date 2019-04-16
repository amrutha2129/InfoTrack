using InfoTrack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace InfoTrack.Services
{
    public class ScrapeOperations : IScrapeOperations
    {
       
        public async Task<UrlRank> parseResultPageAsync(string searchWord, string searchUrl)
        {

            String formattedSearchWord = searchWord.Replace(' ', '+');
            string url = "https://www.google.com.au/search?q=" + formattedSearchWord + "&num=100";
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(url);
            response.EnsureSuccessStatusCode();
            var resultPage = await response.Content.ReadAsStringAsync();

            Dictionary<int, string> urlRankMap = new Dictionary<int, string>();
            int i = 0, k;
            var startOfResults = findStartOfResults(resultPage);
            var resultSections = startOfResults.Split("<div class=\"g\">");
            for (k = 1; k < resultSections.Length; k++)
            {
                urlRankMap.Add(i++, getUrlFromSections(resultSections[k]));
            }
            return getRankList(urlRankMap, searchUrl);
        }


        private string findStartOfResults(string resultPage)
        {
            string[] authorsList = resultPage.Split("ires");
            return authorsList[1];
        }


        private string getUrlFromSections(string section)
        {
            int startOfUrl = section.IndexOf("http");
            if (section[startOfUrl + 4] == 's')
            {
                return section.Substring(startOfUrl, (section.IndexOf("/", startOfUrl + 8)) - startOfUrl);
            }
            else
            {
                return section.Substring(startOfUrl, (section.IndexOf("/", startOfUrl + 7)) - startOfUrl);
            }

        }


        private UrlRank getRankList(Dictionary<int, string> urlRankMap, string searchUrl)
        {
            UrlRank urlRank = new UrlRank();
            foreach (KeyValuePair<int, string> item in urlRankMap)
            {
                if (item.Value.Equals(searchUrl))
                {
                    urlRank.RankList.Add(item.Key);
                }

            }
            return urlRank;
        }

       
    }
}
