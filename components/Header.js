import Link from "next/link";

export default function Header() {
    return (
      <div>
        <span>
            <Link href="/all">
                <a>전체보기</a>
            </Link>
        </span>
        <span>
            <Link href="/doing">
                <a>진행중인 리스트</a>
            </Link>
        </span>
        <span>
            <Link href="/end">
                <a>완료된 리스트</a>
            </Link>
        </span>
      </div>
    );
  }