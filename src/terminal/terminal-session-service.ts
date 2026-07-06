import type { RuntimeTaskSessionSummary } from "../core/api-contract";
import type { TerminalRestoreSnapshot } from "./terminal-state-mirror";

export interface TerminalSessionListener {
	onOutput?: (chunk: Buffer) => void;
	onState?: (summary: RuntimeTaskSessionSummary) => void;
	// `willAutoRestart` is true when the manager is about to relaunch this session
	// (crash auto-restart), so viewers can skip end-of-session teardown handling
	// like re-pushing the final-screen restore.
	onExit?: (code: number | null, willAutoRestart: boolean) => void;
}

export interface TerminalSessionService {
	attach(taskId: string, listener: TerminalSessionListener): (() => void) | null;
	getRestoreSnapshot(taskId: string): Promise<TerminalRestoreSnapshot | null>;
	recoverStaleSession(taskId: string): RuntimeTaskSessionSummary | null;
	writeInput(taskId: string, data: Buffer): RuntimeTaskSessionSummary | null;
	resize(taskId: string, cols: number, rows: number, pixelWidth?: number, pixelHeight?: number): boolean;
	pauseOutput(taskId: string): boolean;
	resumeOutput(taskId: string): boolean;
	stopTaskSession(taskId: string): RuntimeTaskSessionSummary | null;
}
