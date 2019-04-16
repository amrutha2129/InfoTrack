using InfoTrack.Services;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

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
        public void checkInfoTracklRanking()
        {
            var result = _scrapeOperations.parseResultPageAsync("online title search", "https://www.infotrack.com.au");
            //Assert.AreEqual(result, {rankList=[0]});
        }
   }
}
