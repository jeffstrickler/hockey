#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const tie = 1;
const win = 3;

let rankings = []


function parseScore(result) {
    console.log("parseScore")
    let scores = result.split(/,/);

    let team1Name = scores[0].replace(/[0-9]/g, '')
    let team1Score = parseInt(scores[0].match(/\d+/))
    let team1BracketPoints = 0

    let teamName2 = scores[1].replace(/[0-9]/g, '')
    let team_score_2 = parseInt(scores[1].match(/\d+/))
    let team2BracketPoints = 0

    if (team1Score > team_score_2) {
        team1BracketPoints = win;
    } else if (team1Score > team_score_2) {
        team2BracketPoints = win;
    } else {
        team1BracketPoints = tie;
        team2BracketPoints = tie;
    }

    rankings.push({'team': team1Name, 'points': team1BracketPoints},{'team': teamName2, 'points': team2BracketPoints })

}

function rank() {

    const result = rankings.reduce((acc, d) => {
        let idx = acc.findIndex(a => a.team === d.team);
        let val = { team: d.team, points: d.points };

        if (idx > -1) {
            acc[idx].data.push(val);
        } else {
            acc.push({ team: d.team, points: [val] });
        }

        return acc;
    }, []);

    console.log("result -- "+ JSON.stringify(result))

    let sortable = [];
    for (let total in result) {
        sortable.push([total, rankings[total]]);
    }
    /*
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

     */
    let sorted = sortable.slice().sort(function(a,b){return b-a})
    console.log(JSON.stringify(sorted))
    let ranks = sortable.slice().map(function(v){ return sorted.indexOf(v)+1 });
    console.log(JSON.stringify(ranks))
}


async function processLineByLine(filename) {
    const fileStream = fs.createReadStream('sample-input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        //console.log(`Line from file: ${line}`);
        parseScore(line)
    }
    rank()


}


//let filename = process.argv[0]
processLineByLine();

