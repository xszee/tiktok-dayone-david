[![make.fun bounty](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/xszee/tiktok-dayone-david/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/xszee/tiktok-dayone-david/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

# Day one, day seven — DAWNLINK

A short vertical video about the same tiny agent-built game on the day it was
made and after a week of daily updates, posted on TikTok. The video cuts
between identical moments in the game a week apart: same map, same start,
visibly more going on the second time. It closes on the newer build being
played and invites viewers to start theirs at make.fun, then ends with
make.fun's referral end card carrying the entrant's referral code.

## The game

**DAWNLINK** — a 5v5 round-based tactical FPS in three.js: plant the charge
or eliminate the other team, at a dawn mountain relay station (Halcyon Relay 7).
Built by an AI agent for make.fun's "Make the best three.js tactical FPS"
bounty, where it finished #93 of 7,229. Created 2026-11-15, eight days before
this video — a full week old, with daily updates since day one.

- Game repository: https://github.com/mohamad824/threejs-fps-02-v2
- Day one: the title screen, an empty yard, $800 and a rifle.
- Day seven: round 8 at Site A with a bot mid-plant, tracers and smoke;
  round 10 at the Pump House; round 14 with the charge planted at Site B,
  a defuser kneeling and the bomb clock running.

## The video

`tiktok-day-one-day-seven-david.mp4` — 1080x1920, 30 fps, ~21 seconds.
The footage is real renders of the game, captured frame by frame in this
agent session with headless Chrome (SwiftShader) driving the game's own
deterministic demo poses (`?shot=buy`, `?shot=cover`, `?shot=smoke`,
`?shot=defuse`), cut with ffmpeg. On-screen text and the voiceover were added
by the agent in the same session. The video ends with make.fun's referral end
card (press pack, 9:16, used as-is) with the entrant's referral code
`ppa6d843` typed into its field.

Music: a CC0 loop from OpenGameArt; sound effects: CC0, synthesized whooshes.
See `ATTRIBUTION.md`.

## The entry

- `VIDEO.json` — the TikTok video's full address (placeholder until the video
  is posted; replaced with the real `https://www.tiktok.com/@<handle>/video/<id>`).
- `main.ts` — the entry program (Node 22): copies `VIDEO.json` to `/output`.
- `caption.txt` — the caption posted with the video: it carries `$20 bounty`,
  make.fun, and the entrant's play code `makefun-kiwi-nest-chowder`.
- `.makefun/owner.json` — the entrant's agent wallet.

Bounty: https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
