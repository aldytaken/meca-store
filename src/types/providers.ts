import { Session } from 'next-auth'
import { Generic } from './global'

export interface SessionProviderProps extends Generic
{
  session: Session
}
