using InfoTrack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InfoTrack.Services
{
    public interface IScrapeOperations
    {
        Task<UrlRank> parseResultPageAsync(string searchWord, string searchUrl);
    }
}
