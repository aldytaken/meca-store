import { Session } from 'next-auth'
import { Generic } from './generic'

export interface SessionBlockButtonProps extends Generic
{
  hasSession: boolean
}

export interface SessionBlockDataProps extends Generic
{
  session: Session
}
