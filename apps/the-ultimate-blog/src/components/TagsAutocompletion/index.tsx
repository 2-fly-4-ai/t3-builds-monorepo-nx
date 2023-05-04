import { Fragment, useMemo, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi';
import { HiChevronUpDown } from 'react-icons/hi2';
import type { TAG } from '../Writeform';

type TagsAutocompletionProps = {
  tags: TAG[];
  selectedTags: TAG[];
  setSelectedTags: React.Dispatch<React.SetStateAction<TAG[]>>;
};

export default function TagsAutocompletion({
  tags,
  selectedTags,
  setSelectedTags,
}: TagsAutocompletionProps) {
  const [selected, setSelected] = useState(tags[0]);
  const [query, setQuery] = useState('');

  const filteredTags = useMemo(() => {
    return query === ''
      ? tags
      : tags.filter((tag) =>
          tag.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  }, [query, tags]);

  return (
    <Combobox
      value={selected}
      onChange={(tag) => {
        setSelected(tag);
        setSelectedTags((prev) => [...prev, tag]);
      }}
    >
      <div className="relative">
        <div className="relative w-full cursor-default overflow-hidden  bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm ">
          <Combobox.Input
            className="w-full border border-gray-400 px-4 py-2 pr-10 text-sm leading-5 text-gray-900 outline-none focus:ring-0 dark:bg-black dark:bg-opacity-90 dark:text-gray-400 "
            displayValue={(tag: { name: string }) => tag.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <HiChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto  border bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black dark:bg-opacity-50 dark:backdrop-blur sm:text-sm ">
            {filteredTags.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredTags.map((tag) => (
                <Combobox.Option
                  key={tag.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-teal-600 text-white dark:hover:bg-gray-400'
                        : 'text-gray-900 dark:text-gray-400'
                    }`
                  }
                  value={tag}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {tag.name}
                      </span>
                      {selectedTags.includes(tag) ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
