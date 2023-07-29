/**
 * Record<Keys, Type>
 * Type의 프로퍼티의 Key의 집합으로 타입을 생성
 * 보통 프로터피를 다른 타입에 매핑시키는데 사용함
 */
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

nav.about;
