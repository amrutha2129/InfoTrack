using InfoTrack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InfoTrack.Services
{
    public class ScrapeOperations : IScrapeOperations
    {
        public UrlRank parseResultPage(string resultPage, string searchUrl)
        {
            Dictionary<string, int> urlRankMap = new Dictionary<string, int>();
            int i = 0, k;
            string startOfResults = findStartOfResults(resultPage);
            string[] resultSections = startOfResults.Split("<div class=\"g\">");
            for (k = 1; k < resultSections.Length; k++)
            {
                urlRankMap.Add(getUrlFromSections(resultSections[k]), ++i);

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
            int startOfUrl = section.IndexOf("https://");
            int endOfUrl = 0;
            for (int i = startOfUrl + 8; i < section.Length; i++)
            {
                if (section[i].Equals('/'))
                {
                    endOfUrl = i;
                    break;
                }
            }
            return section.Substring(startOfUrl, endOfUrl - 1);
        }

        private UrlRank getRankList(Dictionary<string, int> urlRankMap, string searchUrl)
        {
            UrlRank urlRank = new UrlRank();
            foreach (KeyValuePair<string, int> item in urlRankMap)
            {
                if (item.Key.Equals(searchUrl))
                {
                    urlRank.RankList.Add(item.Value);
                }

            }
            return urlRank;
        }

        
    }
}
