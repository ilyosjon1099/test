import styled from "styled-components";

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const WrapperCard = styled.div`
  padding: 5px 25px 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  column-gap: 2rem;
  row-gap: 3rem;
  margin-bottom: 40px;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  max-height: 800px;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-size: 2rem;
  color: #9cc9e3;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2rem" : "1.5rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 7px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 30px;
  max-height: 145px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
    font-size: 16px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 0.7rem 1.7rem;
  background: ${(props) => (props.colorBg ? "#24a0ed" : "#111A24")};
  border-radius: 8px;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px 2rem 2rem 2rem;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
