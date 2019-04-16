using InfoTrack.Models;
using InfoTrack.Services;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Tests
{
    [TestFixture]
    class ScrapeOperationsTest
    {
        private readonly ScrapeOperations _scrapeOperations;

        public ScrapeOperationsTest()
        {
            _scrapeOperations = new ScrapeOperations();
        }

        [Test]
        public void checkInfoTrackRanking()
        {
            var result = _scrapeOperations.parseResultPageAsync("online title search", "https://www.infotrack.com.au").Result;
            Assert.AreEqual(result.RankList.Count, 1);
            Assert.AreEqual(result.RankList[0], 0);
        }
    }
}
