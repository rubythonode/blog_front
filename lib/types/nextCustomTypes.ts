import { IncomingMessage, ServerResponse } from 'http';
import { ParsedUrlQuery } from "querystring";
import { AppType } from 'next/dist/next-server/lib/utils';
import { RootState } from '../../store/modules';
import { Store } from 'redux';

export type NextPageCustom<P = {}, IP = P> = {
  (props: P): JSX.Element | null;
  defaultProps?: Partial<P>;
  displayName?: string;
  getInitialProps?(ctx: nextPageProps): Promise<IP>
}

export interface nextPageProps {
  /**
   * Error object if encountered during rendering
   */
  err?: Error & {
    statusCode?: number;
  } | null;
  /**
   * `HTTP` request object.
   */
  req?: IncomingMessage;
  /**
   * `HTTP` response object.
   */
  res?: ServerResponse;
  /**
   * Path section of `URL`.
   */
  pathname: string;
  /**
   * Query string section of `URL` parsed as an object.
   */
  query: ParsedUrlQuery;
  /**
   * `String` of the actual path including query.
   */
  asPath?: string;
  /**
   * `Component` the tree of the App to use if needing to render separately
   */
  AppTree: AppType;

  // 커스텀 항목 추가
  store: Store<RootState> | any;
  isServer: boolean;
}