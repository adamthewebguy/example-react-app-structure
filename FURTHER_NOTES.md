# Further Notes on the Example App Structure

## Introduction

This document is a further explanation of the example app structure. It is not part of the example app itself, but is a guide to help you understand the structure and how to use it.

It is in the format of questions and answers, almost like two senior developers discussing a topic.

## Page-level orchestration

### Q:

Remind me how the file content/structure would look for a "page" that requires data from various "features". For example, a gym workout app - it might have a "Hub/Dashboard" that needs access to your personal bests, your current goals, your recent history etc.

### A:

Great example. This is exactly where people either keep things beautifully composed or accidentally build a god-component 😄
Here’s the clean, repeatable pattern.

### Mental model (quick reminder)

_Pages/screens are orchestration layers, not business logic layers._
They:

- pull data from multiple features
- decide what is shown and where
- pass data downward
  They do not:
- calculate
- fetch directly
- enforce domain rules

### Folder placement (page-level)

_pages/_
└── DashboardPage.tsx
_No sub-folders, no domain logic, no repositories._

### Example features involved

_features/goals_
_features/workouts_
_features/personalBests_

### Each feature exposes:

- a hook (useX)
- optionally feature-owned UI

### Dashboard page — file content

_DashboardPage.tsx_

```tsx
export function DashboardPage() {
  // Each hook owns its own data + lifecycle
  const { currentGoal } = useGoals();
  const { recentWorkouts } = useWorkouts();
  const { personalBests } = usePersonalBests();

  return (
    <>
      <GoalsSummary goal={currentGoal} />
      <PersonalBestCard bests={personalBests} />
      <RecentWorkouts workouts={recentWorkouts} />
    </>
  );
}
```

### What’s important here

1. No cross-feature imports
   _The dashboard does not:_

```ts
import { calculateProgress } from "@/features/goals/model";
```

It only talks to public feature APIs.

2. No feature-mixing logic
   _❌ This is wrong:_

```ts
const motivationScore = personalBests.length * goal.difficulty;
```

_If two domains interact:_

```ts
*that logic belongs in a new feature*
*or in a dedicated orchestration hook*
```

### When the page gets “too smart”

If the dashboard starts coordinating behaviour:

```ts
“If the user hits a PR and it matches their goal, show a celebration”
```

\*That's your signal to extract a page-level hook.

### Page-level hook (optional, advanced)

_pages/_
└── DashboardPage.tsx
└── useDashboard.ts

_useDashboard.ts_

```ts
import { useGoals } from "@/features/goals";
import { useWorkouts } from "@/features/workouts";
import { usePersonalBests } from "@/features/personalBests";

export function useDashboard() {
  const goals = useGoals();
  const workouts = useWorkouts();
  const bests = usePersonalBests();

  const showCelebration = bests.latestPR && goals.currentGoal?.target === bests.latestPR.type;

  return {
    ...goals,
    ...workouts,
    ...bests,
    showCelebration,
  };
}
```

Now DashboardPage.tsx goes back to being dumb:

```tsx
const data = useDashboard();
```

### Key rules to remember

_Pages can:_

- call many hooks
- compose many feature UIs
- do layout decisions
  Pages cannot:
- contain domain rules
- reach into feature internals
- become stateful monsters

### One-sentence summary

_Pages are like DJs — they mix tracks from features,
but they don’t write the music._

---
