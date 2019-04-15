using InfoTrack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InfoTrack.Services
{
    public interface IScrapeOperations
    {
        UrlRank parseResultPage(string result, string searchUrl);
    }
}
