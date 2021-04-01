import styled from 'styled-components';

const Svg = styled.svg<{ hide: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 1s ease opacity;
    opacity: ${({ hide }) => hide ? 0 : 1};

    path {
        fill: ${({ theme }) => theme.backgroundColor};
    }

    path:nth-child(2) {
        fill: black;
    }
`;

interface PlaceholderProps {
    hide: boolean;
}

export const Placeholder = ({ hide }: PlaceholderProps) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            id="prefix__vector"
            hide={hide}
            // width={200}
            // height={300}
            viewBox="0 0 2048 3072">
            <defs>
                <style />
            </defs>
            <path d="M0 0h2048v3072H0z" />
            <path
                id="prefix__path_6"
                data-name="path 6"
                d="M1391.62 1357.62L1307 1562l-130.91 17.24 84.64-204.33-130.91 17.24-84.64 204.33-130.91 17.24 84.64-204.33L868 1426.58l-84.63 204.31-130.91 17.24 84.64-204.33-185.74 24.46 67.82 515.05a72.21 72.21 0 0081 62.17l773.15-101.79a72.19 72.19 0 0062.17-81l-67.8-515.09z"
            />
            <path
                id="prefix__path_7"
                data-name="path 7"
                d="M562.66 1263.86a72.21 72.21 0 00-47.18 90.57l35.88 113.72 178.72-56.34L567 1262.47z"
            />
            <path
                id="prefix__path_8"
                data-name="path 8"
                d="M692.89 1222.79L856 1372.21l125.93-39.7-163.13-149.43z"
            />
            <path
                id="prefix__path_9"
                data-name="path 9"
                d="M1306.39 1029.35l-109.8 34.55 163.06 149.42 73.11-23.06-35.76-113.72a72.2 72.2 0 00-90.57-47.19z"
            />
            <path
                id="prefix__path_10"
                data-name="path 10"
                d="M944.73 1143.38l163.06 149.42 125.93-39.7-163.06-149.43z"
            />
        </Svg>
    );
};
