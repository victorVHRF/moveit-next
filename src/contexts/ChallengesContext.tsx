import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
    level: number;
    currentExperince: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperince, setCurrentExperince] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log('New Challenge');
    }
    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperince,
                challengesCompleted,
                levelUp,
                startNewChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}