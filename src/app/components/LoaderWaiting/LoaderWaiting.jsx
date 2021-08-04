import { FlexWrapper } from '../FlexWrapper';
import m from './LoaderWaiting.module.css';

export const LoaderWaiting = () => (
    <FlexWrapper width="100%" height="100%">
        <div className={m.loader} />
    </FlexWrapper>
);
