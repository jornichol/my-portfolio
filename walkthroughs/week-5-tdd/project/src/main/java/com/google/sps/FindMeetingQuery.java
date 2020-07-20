// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.Collection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;

public final class FindMeetingQuery {
  private void availableTimes(ArrayList<TimeRange> orderedTimes, ArrayList<TimeRange> resultTimes, long meetingLength) {
        int count = 0;
        for (TimeRange occupiedTime: orderedTimes){
            TimeRange time;
            if (count == 0){
                time = TimeRange.fromStartEnd(TimeRange.START_OF_DAY, occupiedTime.start(), false);
            } else if (orderedTimes.get(count-1).end() < orderedTimes.get(count).start()){
                time = TimeRange.fromStartEnd(orderedTimes.get(count-1).end(), orderedTimes.get(count).start(), false);
            } else {
                count++;
                continue;
            }
            if (time.duration() >= meetingLength){
                resultTimes.add(time);
            }
            count++;
        }
        if (orderedTimes.size() > 0){
            TimeRange time = TimeRange.fromStartEnd(orderedTimes.get(orderedTimes.size()-1).end(), TimeRange.END_OF_DAY, true);
            if (time.duration() >= meetingLength) {
                resultTimes.add(time);
            }
        } else {
            TimeRange time = TimeRange.fromStartEnd(TimeRange.START_OF_DAY, TimeRange.END_OF_DAY, true);
            resultTimes.add(time);
        }
  }
 
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    if ((int)request.getDuration() <= TimeRange.WHOLE_DAY.duration()) {
        if (events.isEmpty() || request.getAttendees().isEmpty()){
            return Arrays.asList(TimeRange.WHOLE_DAY);
        }
        ArrayList<TimeRange> occupiedTimes = new ArrayList<TimeRange>(); //a list of times when requested attendees are occupied
        ArrayList<TimeRange> resultTimes = new ArrayList<TimeRange>();
        for (String attendee: request.getAttendees()){
            for (Event e: events) {
                if (e.getAttendees().contains(attendee)) {
                    boolean contained  = false;
                    for (TimeRange time: occupiedTimes) {
                        if (time.contains(e.getWhen())){
                            contained = true;
                        }
                    }
                    if (contained == false) {
                        occupiedTimes.add(e.getWhen());
                    }
                }
            }
        }
        //a list allows iterable traversal of meeting times
        Collections.sort(occupiedTimes, TimeRange.ORDER_BY_START);
        //the available times for a meeting request can be determined from meeting times of all attendees 
        availableTimes(occupiedTimes, resultTimes, request.getDuration());
        return resultTimes;
    }
    return Arrays.asList();
  }
}
