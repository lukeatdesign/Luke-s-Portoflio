import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/showup/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const showupCaseStudy: RichCaseStudy = {
  slug: 'showup',
  heroImage: {
    src: img('live-today.png'),
    alt: 'ShowUp Today screen on a 63-day streak: STRENGTH, BOXING, STRETCH and REST lanes, the week grid, and Yuna telling Luke to pick a lane.',
  },
  heroDetails: {
    subtitle: '2026 / Personal AI Fitness Accountability App',
    facts: [
      { label: 'Category', value: 'AI Fitness Companion' },
      { label: 'Date', value: '2026' },
      { label: 'Role', value: 'Solo Designer & Builder' },
      { label: 'Type', value: 'Personal product, live in daily use' },
    ],
    duration: ['Ongoing - designed, built, and deployed as a living product'],
    methods: ['Claude Code', 'Next.js', 'TypeScript', 'Tailwind CSS v4', 'Supabase', 'Anthropic API', 'Vercel'],
    team: ['1x Solo Designer & Builder (Me)', '1x AI Companion (Yuna)'],
  },
  summary: [
    {
      emphasis: 'ShowUp is a scoreboard for exactly one athlete - me.',
      body:
        'One clean loop: show up, log or plan, the board updates, and Yuna - the AI companion - reacts in context. No auth flows, no growth features, no other users to compromise for.',
    },
    {
      emphasis: 'It optimizes the ten seconds before the workout, not the record after it.',
      body:
        'Every tracker I tried was great at recording history and useless at the 8PM moment where the night actually gets decided. ShowUp is built for that moment.',
    },
    {
      emphasis: 'Yuna is a designed personality with designed restraint.',
      body:
        'Her voice was written before her screens. She turns natural chat into structured logs - and the most engineered part of her is knowing when to write nothing at all.',
    },
  ],
  background:
    'ShowUp is a personal fitness accountability web app with a single user: me. Yuna, an AI companion, lives persistently in the interface - she chats, turns natural language into structured workout rows, builds session plans around how I actually feel, and calls the week like a commentator reading a match. The whole product is styled like a sports broadcast, because a scoreboard treats your training like it matters. It is live, deployed, and running my real training weeks - the screenshots on this page are my actual data.',
  motivation: [
    'It is 8PM in Bangkok. Work is done, dinner is settling, and there is a very specific ten-second window where tonight goes one of two ways: I pick up the gloves, or I drift into a screen and the night quietly disappears. Every fitness app I tried lived on the wrong side of that window - brilliant at recording what happened, silent while it was being decided.',
    'I had a second motive, too. As a designer I kept circling one question: what does it actually mean to design an AI personality as product material - not a mascot, not a gimmick, but a load-bearing part of the UX? The most honest way to find out was to build a companion I would have to live with. One user, every night, zero tolerance for a wrong note in her voice.',
  ],
  role: [
    'Solo designer and builder - product thinking, the visual system, Yuna’s persona, and the build itself.',
    'Designed a DixonBaxi/Eurosport-inspired editorial system - sharp corners, broadcast yellow, Bebas Neue display type - maintained as a living design-system doc.',
    'Built through agentic engineering: AI coding agents work from my design docs, specs, and voice documents as the source of truth, while I direct, review, and test every flow - the same full-loop designer role I have always worked, with agents as the build team.',
  ],
  research: {
    image: img('live-board-analysis.png'),
    quote:
      'The problem was never logging workouts. The problem was showing up. So the product optimizes for the moment before the session - everything else is downstream of that.',
    bullets: [
      'I treated myself as a research subject with a dataset: training happens at night (the board now shows 92% of sessions starting after 10PM), energy swings hard day to day, and missed days cluster - one quiet miss becomes three.',
      'Yuna’s persona document was written before her first screen. Voice, temper, what she never says, how fierce she gets per situation - once that was fixed, every UI decision had a test: does this sound like her?',
      'The visual research went to sports broadcast design, not fitness apps. DixonBaxi’s Eurosport work treats an athlete’s night like an event - and if the app feels like a stadium, skipping feels like not showing up to your own match.',
    ],
    quotes: [
      '“8PM. You know the deal (ง ̀_́)ง - pick a lane.” - Yuna, opening the Today screen',
      '“63 days straight. don’t ruin it tonight 555” - Yuna, reading the board',
      '“Plate 10 on Chest Press. Still on the board.” - Yuna, holding a grudge against a specific weight',
      '“2 sessions, 2 PRs, and 0 missed days. That’s a real week. Keep it up.” - Yuna’s weekly verdict',
    ],
  },
  painPoints: [
    {
      title: 'Trackers design for the log, not for the decision to train',
      body:
        'Open any fitness tracker and you land on a form or a graveyard of past stats. All of the craft goes into recording what already happened; none of it goes into the 8PM window where motivation actually lives. The app knows everything about my past and has nothing to say about tonight. I did not need a database with a UI - I needed something waiting for me at the door.',
    },
    {
      title: 'Natural-language logging collapses the moment the AI gets eager',
      body:
        'Letting an AI write database rows from chat is the dream feature - and the fastest way to destroy trust. Early Yuna logged a workout when I said good night. Think about what that means: now I have to audit my own accountability partner. An assistant that writes wrong data is worse than a form, because a form at least never lies on its own initiative.',
    },
    {
      title: 'Missed days get silence or shame - neither gets you back',
      body:
        'Most apps quietly reset your streak overnight, which teaches you that missing is free. The rest send sad guilt notifications, which teaches you to swipe them away. Both responses end the relationship at exactly the moment an accountability product has its only real job to do: pull you back in for tomorrow night.',
    },
  ],
  processImages: [
    {
      src: img('live-mobile-today.png'),
      label: 'Same loop, one thumb',
      caption:
        'The mobile Today screen keeps the exact broadcast hierarchy - Yuna’s line, the streak, and full-width lanes you can hit from the gym floor.',
    },
    {
      src: img('session-summary.png'),
      label: 'The loop always closes',
      caption:
        'Even a one-set night cuts to a summary board. “Short board still counts” is the product thesis in four words.',
    },
  ],
  solutions: [
    {
      title: 'The Today screen asks one question: pick a lane',
      body:
        'Home is not a dashboard - it is a broadcast rundown. STRENGTH, BOXING, STRETCH, REST: four full-width bands in display type, each with one line of Yuna working the moment (“Plate 10 still sits on the rack waiting for a rematch”). Rest is a first-class lane logged with the same dignity as a PR night, because a streak that requires heroics every night is a streak that dies. There is nothing else to do on this screen but decide.',
      image: img('live-today.png'),
      caption:
        'Tonight’s rundown on a real 63-day streak: four lanes, the week target, and Yuna already talking.',
    },
    {
      title: 'Yuna logs natural chat - and is engineered to hesitate',
      body:
        'Every message runs through an intent classifier - casual, fitness, logging, planning - with one golden rule: lean casual. A log is only written on a clear signal (an exercise name plus a number), same-session mentions merge instead of duplicating rows, and “yesterday” parses into a backdated session. The restraint is the feature. Because Yuna never logs a greeting, I never have to check her work - which is the entire reason the chat door can stay open all day.',
      image: img('live-yuna.png'),
      caption:
        'A real transcript: three planning requests at three energy levels, three different boards - and nothing logged until there are numbers.',
    },
    {
      title: 'Strength Live turns the session into an operator’s cockpit',
      body:
        'Starting a lift takes over the screen like a live broadcast: active exercise in display type, set progress, session and rest clocks, a queue rail, and Yuna as the live operator. Mid-session she answers from the actual queue state - sets left, next exercise, rest cues - with replies kept deliberately short, and a hard guarantee that live questions never create phantom sessions. Logging a set is one yellow button pressed between lifts with shaking arms - which is exactly the ergonomic bar it has to clear.',
      image: img('strength-live-active.png'),
      caption:
        'The cockpit mid-set: one glance for the set, one button to bank it. Everything else waits.',
    },
    {
      title: 'Missed days become debts - and Yuna collects',
      body:
        'Skip a night and it does not vanish: a debt row appears on the Today screen with a concrete tax - 20 push-ups, from May 09, one pending debt - and two buttons: pay it now, or fold it into tonight’s session. The framing does the emotional work. A debt is not shame; it is unfinished business between you and someone who was counting on you, and it converts a miss into a reason to come back instead of a reason to hide.',
      image: img('today-debt-banner.png'),
      caption:
        '“You owe Yuna. 20 push-ups. Settle this before we start. (눈_눈)” - guilt engineered into a payable form.',
    },
    {
      title: 'Tough-love mode: the app goes quiet before it goes soft',
      body:
        'Miss several days and ShowUp stops being colorful. The dashboard is replaced by a near-black screen: the old streak crossed out, and Yuna at her most fierce - “I’m not counting anymore. Come back when you’re ready to actually show up. No debt. No tax. Just show up.” One yellow bar at the bottom: I’M BACK. LET’S GO. It is the hardest emotional tuning in the product - enough pull to get me through the door, never enough shame to make me delete the app.',
      image: img('ann-mode.png'),
      caption:
        'Tough-love mode after three missed days. No stats, no cheer - one honest sentence and one way back.',
    },
    {
      title: 'Planning starts from tonight’s reality, not a template',
      body:
        'Plan with Yuna opens with a structured preflight - energy, condition, minutes - and generates a board from my exercise registry, recent history, and push/pull balance. The plan lands as an editable table with a side chat: “swap Cable Crunch for Leg Curl” just works through fuzzy registry matching, and low-confidence matches surface options instead of guessing. Ask for the same night at 3/5 energy and at 1/5, and you get two genuinely different sessions - the 1/5 plan is ten minutes, hits fresh muscle groups, and leaves.',
      image: img('plan-with-yuna.png'),
      caption:
        'Preflight in, editable board out - the plan bends to the conversation instead of restarting.',
    },
    {
      title: 'The Board reads your training like a commentator',
      body:
        'The Board is the payoff for every logged night: a training score with a coach read in Yuna’s voice, streak and density tiles, a 30-day intensity heatmap, fresh PRs, and a tactical panel that notices what I would rather not (“boxing was 29d ago. pads are getting cold~”). Every number derives from one shared metric source that also feeds Yuna’s chat answers - so the commentator and the scoreboard can never disagree, which is a trust requirement disguised as an architecture decision.',
      image: img('live-board-overview.png'),
      caption:
        'The live board: training score 95, coach read, heatmap, PRs - and Yuna’s verdict on the week.',
    },
  ],
  outcomes: [
    {
      emphasis: 'The product is live and holding a real streak.',
      body:
        'ShowUp is deployed and in nightly use - the 63-day streak, the PRs, and the 92%-after-10PM histogram on this page are my actual training data, imported history and all. The clearest outcome metric a motivation product can have is that its one user keeps showing up.',
    },
    {
      emphasis: 'Yuna’s personality became product infrastructure.',
      body:
        'Her persona doc, voice rules, and intent guardrails drive every response across seven screen contexts - short mid-set, loud after PRs, quiet-fierce when days go missing. Designing when she does nothing turned out to be the core UX work, and it is what keeps the chat trustworthy enough to be the primary input.',
    },
    {
      emphasis: 'It proved a design-docs-first way of building with AI agents.',
      body:
        'The design system, product spec, and persona files are the source of truth that coding agents build from - research to acceptance testing stays with the designer, agents do the hands. This case study page itself, including the interactive demo above, was produced through the same workflow.',
    },
  ],
  learnings: [
    {
      title: 'AI personality is a design material',
      body:
        'Yuna’s voice was specified before her screens - tone, temper, what she never says, how she reacts to a missed day versus a PR. Once the persona was fixed, interface decisions got easier and faster: every screen just had to sound like her. Personality-as-spec scales; personality-as-vibes drifts.',
    },
    {
      title: 'Trust in an AI logger is built on restraint',
      body:
        'The feature that made natural-language logging viable was not smarter extraction - it was the guardrail that decides when not to write. In agentic products the no-action path deserves the same design attention as the happy path, because one wrong write costs more trust than fifty right ones earn.',
    },
    {
      title: 'Motivation design is emotional tuning, not feature shipping',
      body:
        'Streaks, debts, verdicts, and tough-love mode are one system with a single dial: how hard can Yuna push before pull becomes shame? That dial got tuned by living with it - the tough-love mode that shipped is quieter and shorter than the one I designed first, because the loud one made me avoid the app instead of the gym.',
    },
    {
      title: 'Designing for one user removes compromise, not rigor',
      body:
        'No personas, no edge-case debates - and still the product needed a design system, living specs, a progress handoff doc, and a test mode to evolve safely for months. The discipline is what keeps a personal product from collapsing into a pile of one-off decisions.',
    },
  ],
}
