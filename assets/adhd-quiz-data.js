// ADHD Focus Type Quiz Data
const quizData = {
  title: "What's Your ADHD Focus Type?",
  subtitle: "Discover your unique ADHD profile and get personalized strategies that actually work",
  duration: "5-7 minutes",
  disclaimer: "This quiz is for educational purposes only and is not a diagnostic tool. For a formal ADHD assessment, please consult with a healthcare professional.",
  
  questions: [
    {
      id: 1,
      question: "When starting a new project, I typically:",
      options: [
        { text: "Jump in immediately with high energy and enthusiasm", type: "hyperactive" },
        { text: "Struggle to begin, even if I'm interested", type: "inattentive" },
        { text: "Start multiple approaches simultaneously", type: "combined" },
        { text: "Carefully plan but have trouble executing", type: "executive" }
      ]
    },
    {
      id: 2,
      question: "In conversations, I often:",
      options: [
        { text: "Interrupt or finish others' sentences", type: "hyperactive" },
        { text: "Lose track of what's being said", type: "inattentive" },
        { text: "Both interrupt AND zone out", type: "combined" },
        { text: "Struggle to organize my thoughts to respond", type: "executive" }
      ]
    },
    {
      id: 3,
      question: "My workspace typically looks:",
      options: [
        { text: "Chaotic but I know where everything is", type: "hyperactive" },
        { text: "Cluttered with forgotten items", type: "inattentive" },
        { text: "Extremely messy with multiple unfinished projects", type: "combined" },
        { text: "Organized in theory, but hard to maintain", type: "executive" }
      ]
    },
    {
      id: 4,
      question: "When facing a deadline, I:",
      options: [
        { text: "Work in intense bursts of activity", type: "hyperactive" },
        { text: "Underestimate time needed and miss it", type: "inattentive" },
        { text: "Panic and either hyperfocus or completely avoid", type: "combined" },
        { text: "Know what to do but struggle to prioritize steps", type: "executive" }
      ]
    },
    {
      id: 5,
      question: "My biggest challenge with tasks is:",
      options: [
        { text: "Sitting still long enough to complete them", type: "hyperactive" },
        { text: "Maintaining focus without drifting away", type: "inattentive" },
        { text: "Both staying still AND staying focused", type: "combined" },
        { text: "Breaking them down into manageable steps", type: "executive" }
      ]
    },
    {
      id: 6,
      question: "When I'm interested in something, I:",
      options: [
        { text: "Dive in with intense energy and enthusiasm", type: "hyperactive" },
        { text: "Hyperfocus for hours and lose track of time", type: "inattentive" },
        { text: "Obsessively research while juggling other interests", type: "combined" },
        { text: "Have ideas but struggle to implement them systematically", type: "executive" }
      ]
    },
    {
      id: 7,
      question: "In social situations, I tend to:",
      options: [
        { text: "Talk a lot and have high energy", type: "hyperactive" },
        { text: "Seem quiet or distracted", type: "inattentive" },
        { text: "Alternate between being very social and withdrawn", type: "combined" },
        { text: "Struggle with social cues and timing", type: "executive" }
      ]
    },
    {
      id: 8,
      question: "My sleep patterns are:",
      options: [
        { text: "Irregular because I can't wind down", type: "hyperactive" },
        { text: "Disrupted by racing thoughts", type: "inattentive" },
        { text: "Chaotic - both can't settle AND can't wake up", type: "combined" },
        { text: "Poor because I can't establish a routine", type: "executive" }
      ]
    },
    {
      id: 9,
      question: "When learning something new, I:",
      options: [
        { text: "Need to move or do while learning", type: "hyperactive" },
        { text: "Drift off unless it's extremely engaging", type: "inattentive" },
        { text: "Start enthusiastically but struggle to finish", type: "combined" },
        { text: "Understand concepts but can't apply them step-by-step", type: "executive" }
      ]
    },
    {
      id: 10,
      question: "My biggest frustration is:",
      options: [
        { text: "Feeling like I'm always 'too much' for others", type: "hyperactive" },
        { text: "Being seen as lazy when I'm actually struggling", type: "inattentive" },
        { text: "The unpredictability of my focus and energy", type: "combined" },
        { text: "Knowing what to do but can't make myself do it", type: "executive" }
      ]
    }
  ],
  
  results: {
    hyperactive: {
      title: "The Energizer",
      subtitle: "Hyperactive-Impulsive Presentation",
      description: "You're driven by physical and mental restlessness. Your brain moves fast, and sitting still feels nearly impossible. You thrive on movement, spontaneity, and high-energy environments.",
      strengths: [
        "High energy and enthusiasm",
        "Quick thinking and adaptability",
        "Excellent in crisis situations",
        "Natural multitasker"
      ],
      challenges: [
        "Difficulty with sustained attention",
        "Impulsive decision-making",
        "Restlessness in structured environments",
        "Interrupting others"
      ],
      strategies: [
        "Use movement breaks every 25-30 minutes",
        "Try standing desks or walking meetings",
        "Channel energy into physical activities",
        "Practice the '10-second rule' before responding"
      ]
    },
    inattentive: {
      title: "The Dreamer",
      subtitle: "Inattentive Presentation",
      description: "Your mind is a rich landscape of thoughts and ideas. You can hyperfocus intensely on what interests you, but mundane tasks feel impossible. You're often misunderstood as lazy or unmotivated.",
      strengths: [
        "Deep focus on interesting topics",
        "Creative and imaginative thinking",
        "Calm demeanor in chaos",
        "Thoughtful and reflective"
      ],
      challenges: [
        "Difficulty starting tasks",
        "Losing track of time",
        "Forgetfulness with daily tasks",
        "Appearing disengaged"
      ],
      strategies: [
        "Use visual timers and alarms",
        "Create 'launch sequences' for tasks",
        "Implement the 'two-minute rule'",
        "Use body doubling for accountability"
      ]
    },
    combined: {
      title: "The Oscillator",
      subtitle: "Combined Presentation",
      description: "You experience both hyperactive and inattentive symptoms, often oscillating between high energy and mental fog. This combination can be particularly challenging as you navigate both extremes.",
      strengths: [
        "Versatile and adaptable",
        "Intense passion for interests",
        "Resilient and resourceful",
        "Unique perspective on problems"
      ],
      challenges: [
        "Unpredictable energy levels",
        "Both restlessness AND inattention",
        "Difficulty with consistency",
        "Managing multiple symptoms"
      ],
      strategies: [
        "Track your energy patterns",
        "Build flexible routines",
        "Use both movement and focus tools",
        "Practice self-compassion during transitions"
      ]
    },
    executive: {
      title: "The Strategist",
      subtitle: "Executive Function Challenges",
      description: "You understand what needs to be done and can see the big picture, but translating that into action feels like an impossible gap. Your challenges are primarily with planning, organizing, and executing tasks.",
      strengths: [
        "Big-picture thinking",
        "Understanding complex concepts",
        "Awareness of your challenges",
        "Strategic mindset"
      ],
      challenges: [
        "Difficulty with task initiation",
        "Poor time management",
        "Trouble prioritizing",
        "Working memory issues"
      ],
      strategies: [
        "Use external systems (apps, planners)",
        "Break tasks into tiny steps",
        "Implement time-blocking",
        "Create visual workflow maps"
      ]
    }
  }
};
