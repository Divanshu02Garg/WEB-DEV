const request = require ("request");
const jsdom = require ("jsdom");
const {JSDOM} = require ("jsdom");

const link= "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request (link , cb);
function cb(error,response, html){
    if (error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = documents.querySelectorsAll('a[data-hover="scorecard"]');
        for(i=0; i<allScorecardTags0.length; i++){
            let link= allScorecardTags[i].href;
           // let completeLink = "
        }
    }
}
