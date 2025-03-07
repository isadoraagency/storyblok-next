import { useState, useEffect } from "react";

export const useEvents = (page, locationFilter) => {
  const [events, setEvents] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const version = process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "published";
  const token = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;
  useEffect(() => {
    const fetchEvents = async () => {
      const perPage = 10;
      let query = `?starts_with=event/&per_page=${perPage}&page=${page}&sort_by=content.start_date:asc&version=${version}`;

      if (locationFilter) {
        query += `/&filter_query[location][in]=${locationFilter}`;
      }

      const response = await fetch(
        `https://api-us.storyblok.com/v2/cdn/stories/${query}&token=${token}`
      );

      const data = await response.json();

      setEvents(data.stories || []);
      setTotalPages(data.total ? Math.ceil(data.total / perPage) : 1);
    };

    fetchEvents();
  }, [page, locationFilter]);

  return { events, totalPages };
};
