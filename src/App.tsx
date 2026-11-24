import { useCallback, useState } from 'react';
import { soundEngine } from './audio/soundEngine';
import { GardenGame } from './components/GardenGame';
import { LetterSurprise } from './components/LetterSurprise';
import { TitleScreen } from './components/TitleScreen';
import { GamePhase, generateRoundOutcomes } from './types/game';

export default function App() {
  const [phase, setPhase] = useState<GamePhase>('TITLE');
  const [round, setRound] = useState(() => generateRoundOutcomes());
  const [roundId, setRoundId] = useState(1);
  const [muted, setMuted] = useState(false);

  const handleToggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      soundEngine.setMuted(next);
      return next;
    });
  }, []);

  const handleStartGame = useCallback(() => {
    soundEngine.unlock();
    soundEngine.playSoftMeow(1.1);
    setRound(generateRoundOutcomes());
    setRoundId((id) => id + 1);
    setPhase('PLAYING');
  }, []);

  const handleFindCorrectCat = useCallback(() => {
    setPhase('FOUND_CAT');
  }, []);

  const handleOpenLetter = useCallback(() => {
    setPhase('LETTER_OPEN');
  }, []);

  const handlePlayAgain = useCallback(() => {
    soundEngine.stopRomanticMusic();
    soundEngine.playSoftMeow(1.05);
    setRound(generateRoundOutcomes());
    setRoundId((id) => id + 1);
    setPhase('PLAYING');
  }, []);

  if (phase === 'TITLE') {
    return <TitleScreen onStart={handleStartGame} />;
  }

  if (phase === 'LETTER_OPEN') {
    return (
      <LetterSurprise
        muted={muted}
        onToggleMute={handleToggleMute}
        onPlayAgain={handlePlayAgain}
      />
    );
  }

  return (
    <GardenGame
      key={roundId}
      outcomes={round.outcomes}
      foundCat={phase === 'FOUND_CAT'}
      muted={muted}
      onToggleMute={handleToggleMute}
      onFindCorrectCat={handleFindCorrectCat}
      onOpenLetter={handleOpenLetter}
    />
  );
}
