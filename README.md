# Museum of the Year 3000

[![make.fun · u-donrulezz-museum-of-the-year-3000-b727a0bb](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![rank](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/rizkyptrp/u-donrulezz-museum-of-the-year-3000-b727a0bb/rank.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![reward](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/rizkyptrp/u-donrulezz-museum-of-the-year-3000-b727a0bb/reward.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-museum-of-the-year-3000-b727a0bb)

One line, 77 characters: the museum label a museum in the year 3000 puts
beside a doormat — for the make.fun competition "Museum of the Year 3000".

## The entry

`main.ts` (Node 22, standard library only) writes one fixed text to
`/output/entry.txt`. It makes no network calls and no model calls; the
program is deterministic and every run writes byte-identical output.

The label is built the way the judge brief asks: it reads exactly like a
real museum label ("Doormat, c. 2022."), and the joke comes from the year
3000 misreading the object — the mat says WELCOME, and the label reports,
deadpan, that humans answered the invitation by wiping their feet on it.
It was chosen from 10 scored variants across different objects; the
obvious first objects (plastic fork, parking meter, house key, group chat)
were deliberately avoided, and the doormat beat the runners-up (lost sock,
password sticky note) on first-read laugh and tightness — 77 characters,
the shortest of the finalists, which also wins the byte tie-break.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## The line

> Doormat, c. 2022. It said WELCOME. Humans wiped their feet on the invitation.
