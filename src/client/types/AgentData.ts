import System from '../systems/System';

type AgentData = {
    accountId: string;
    symbol: string;
    headquarters: string;
    homeSystem?: System
    credits: number;
}

export default AgentData
