const COMBOS = {
	hard_aau: {
		balancing: "same as hard mode, but faster",
		balanceCheck: false
	},
	hard_na: {
		balancing: "almost balanced (late game is quite slow)",
		balanceCheck: false
	},
	aau_na: {
		balancing: "slightly faster than normal",
		balanceCheck: false
	},
	absurd: {
		balancing: "completely impossible",
		balanceCheck: true
	},
	easy: {
		balancing: "balanced up to Infinity",
		balanceCheck: false
	},
	easy_hard: {
		balancing: "balanced up to Infinity",
		balanceCheck: false
	},
	extreme: {
		balancing: "balanced up to Infinity",
		balanceCheck: false
	}
};

const MODES = {
	hard: {
		desc:
			"The game is harder & slower, with slight compensation to help you slowly grind to the end (ends at Infinity).",
		balancing: "balanced up to Infinity",
		balanceCheck: false,
		combos: {
			aau: JSON.parse(JSON.stringify(COMBOS.hard_aau)),
			na: JSON.parse(JSON.stringify(COMBOS.hard_na)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.easy_hard)),
			extreme: JSON.parse(JSON.stringify(COMBOS.extreme))
		},
		dis: ["extreme"]
	},
	aau: {
		desc: "Start with all achievements unlocked.",
		balancing: "same as normal, but faster.",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hard_aau)),
			na: JSON.parse(JSON.stringify(COMBOS.aau_na)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.easy)),
			extreme: JSON.parse(JSON.stringify(COMBOS.extreme))
		}
	},
	na: {
		desc: "All unnecessary achievements are gone.",
		balancing: "almost balanced (late game is slow)",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hard_na)),
			aau: JSON.parse(JSON.stringify(COMBOS.aau_na)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.easy)),
			extreme: JSON.parse(JSON.stringify(COMBOS.extreme))
		}
	},
	absurd: {
		desc: "Ehehe... You'll see...",
		balancing: "completely impossible",
		balanceCheck: true,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.absurd)),
			aau: JSON.parse(JSON.stringify(COMBOS.absurd)),
			na: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.absurd)),
			extreme: JSON.parse(JSON.stringify(COMBOS.absurd))
		}
	},
	easy: {
		desc: "This mode is easier & faster to help you reach the end faster (ends at Elementary).",
		balancing: "balanced up to Elementary",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.easy_hard)),
			aau: JSON.parse(JSON.stringify(COMBOS.easy)),
			na: JSON.parse(JSON.stringify(COMBOS.easy)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			extreme: JSON.parse(JSON.stringify(COMBOS.extreme))
		}
	},
	extreme: {
		desc:
			"This mode is an extension of Hard Mode that makes it even more difficult, however adds The Furnace (a new feature) to compensate for this (ends at Elementary).",
		balancing: "balanced up to Elementary",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.easy_hard)),
			aau: JSON.parse(JSON.stringify(COMBOS.easy)),
			na: JSON.parse(JSON.stringify(COMBOS.easy)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.extreme))
		},
		ext: ["hard"]
	}
};

const MODE_VARS = {
	extreme: {
		rankCheap: new ExpantaNum(0),
		furnace: {
			coal: new ExpantaNum(0),
			upgrades: [new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0)],
			blueFlame: new ExpantaNum(0)
		},
		activeFC: 0,
		furnChalls: [],
	}
};

const MODE_EX = {
	extreme: function (source) {
		source.rankCheap = new ExpantaNum(source.rankCheap);
		source.furnace.coal = new ExpantaNum(source.furnace.coal);
		source.furnace.upgrades = [
			new ExpantaNum(source.furnace.upgrades[0]),
			new ExpantaNum(source.furnace.upgrades[1]),
			new ExpantaNum(source.furnace.upgrades[2])
		];
		source.furnace.blueFlame = new ExpantaNum(source.furnace.blueFlame);
		return source;
	}
};
